import api from "./api";

const bookingService = {

  createBooking: async (
    bookingData
  ) => {

    const response =
      await api.post(
        "/bookings",
        bookingData
      );

    return response.data;
  },

  getMyBookings: async () => {

    const response =
      await api.get(
        "/bookings/my"
      );

    return response.data;
  },

  getOwnerBookings:
  async () => {

    const response =
      await api.get(
        "/bookings/owner"
      );

    return response.data;
  },

  updateBookingStatus:
  async (
    bookingId,
    status
  ) => {

    const response =
      await api.put(

        `/bookings/${bookingId}`,

        { status }

      );

    return response.data;
  },

  deleteBooking:
  async (
    bookingId
  ) => {

    const response =
      await api.delete(
        `/bookings/${bookingId}`
      );

    return response.data;
  }

};

export default bookingService;