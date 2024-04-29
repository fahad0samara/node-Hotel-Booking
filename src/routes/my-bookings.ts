import express, { Request, Response } from "express";
import verifyToken from "../middleware/auth";
import Hotel from "../models/hotel";
import { HotelType } from "../shared/types";

const router = express.Router();

// Route for fetching bookings made by the current user
router.get("/", verifyToken, async (req: Request, res: Response) => {
  try {
    // Find all hotels where the user has made a booking
    const hotels = await Hotel.find({
      bookings: { $elemMatch: { userId: req.userId } },
    });

    // Map through the hotels and filter out only the bookings made by the user
    const results = hotels.map((hotel) => {
      const userBookings = hotel.bookings.filter(
        (booking) => booking.userId === req.userId
      );

      // Create a new HotelType object with only the user's bookings
      const hotelWithUserBookings: HotelType = {
        ...hotel.toObject(),
        bookings: userBookings,
      };

      return hotelWithUserBookings;
    });

    // Send the results
    res.status(200).send(results);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Unable to fetch bookings" });
  }
});

export default router;
