import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const TodoSlice = createApi(
    {
        reducerPath:"TodoSlice",
        baseQuery: fetchBaseQuery({baseUrl: "https://66279dfcb625bf088c09052f.mockapi.io/ziuo/api/todo"}),
        tagTypes:["TodoSlice"],
        endpoints: (builder) => (
            {
                getData: builder.query(
                    {
                        query: () => "",
                        providesTags: (result) => 
                            result ?
                        [
                            ...result?.map(({id}) => ({type:"TodoSlice" , id})),
                            {type:"TodoSlice" , id:"LIST"}
                        ] :
                        [{type:"TodoSlice" , id:"LIST"}]
                    }
                ),
                deleteUser: builder.mutation(
                    {
                        query: (id) => (
                            {
                                url:`/${id}`,
                                method:"DELETE"
                            }
                        ),
                        invalidatesTags:["TodoSlice"]
                    }
                ),
                postUser: builder.mutation(
                    {
                        query: (obj) => (
                            {
                                method: "POST",
                                body: obj
                            }
                        ),
                        invalidatesTags: ["TodoSlice"]
                    }
                ),
                editUser: builder.mutation(
                    {
                        query: (obj) => (
                            {
                                url: obj.id,
                                method: "PUT",
                                body: obj
                            }
                        ),
                        invalidatesTags: ["TodoSlice"]
                    }
                )
            }
        )
    }
)

export const {useGetDataQuery , useDeleteUserMutation , usePostUserMutation , useEditUserMutation} = TodoSlice