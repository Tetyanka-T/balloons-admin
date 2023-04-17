import { createSelector } from "@reduxjs/toolkit";

export const getOrders = (state) => state.orders.items;
export const getFilter = (state) => state.orders.filter;
export const getIsLoading = (state) => state.orders.isLoading;

export const getOrdersNew = createSelector(getOrders, (orders) => {
  return orders.filter((order) => order.status === "новий");
});
// export const getVisibleContact = createSelector(
//     [getContacts, getFilter],
//     (contacts, filter) => {
//       const normalizedFilter = filter.toLowerCase();
//       return contacts.filter(contact =>
//         contact.name.toLowerCase().includes(normalizedFilter),
//       );
//     },
//   );
