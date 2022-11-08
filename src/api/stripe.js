import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getConfig } from '../config/app-config'
import { pushToast } from '../slices/toastSlice'
import { toastMessages, toastTypes } from '../fixtures'
import { getIdToken } from '../utils'

export const stripeApi = createApi({
  reducerPath: 'stripeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: getConfig().API_URL,
    prepareHeaders: (headers) => {
      const token = getIdToken()
      if (token) {
        headers.set('authorization', `${token}`)
      }
      return headers
    },
  }),
  endpoints: (builder) => ({
    getPlans: builder.query({
      query: () => ({
        url: `stripe/plans`,
        method: 'GET',
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled
        } catch (error) {
          dispatch(
            pushToast({
              type: toastTypes.error,
              message:
                error?.error?.data?.message || toastMessages.common.error,
            })
          )
        }
      },
    }),
    postSubscription: builder.mutation({
      query: (data) => ({
        url: `stripe/subscriptions`,
        method: 'POST',
        body: data,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled
        } catch (error) {
          dispatch(
            pushToast({
              type: toastTypes.error,
              message:
                error?.error?.data?.message || toastMessages.common.error,
            })
          )
        }
      },
    }),
    getSubscription: builder.query({
      query: ({ publicId }) => ({
        url: `stripe/subscriptions/${publicId}`,
        method: 'GET',
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled
        } catch (error) {
          if (!error.error.data.message.includes('requested URL')) {
            dispatch(
              pushToast({
                type: toastTypes.error,
                message:
                  error?.error?.data?.message || toastMessages.common.error,
              })
            )
          }
        }
      },
    }),
  }),
})

export const {
  useGetPlansQuery,
  usePostSubscriptionMutation,
  useGetSubscriptionQuery,
  useLazyGetSubscriptionQuery,
} = stripeApi
