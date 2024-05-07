import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    title: '',
    slug: '', 
    content: '',
    image: '',
    category: '',
}

const blogFormSlice = createSlice({
    name: 'blogForm',
    initialState,
    reducers: {
        updateTitle: (state, action) => {
            state.title = action.payload;
        },
        updateSlug: (state, action) => {
            state.slug = action.payload;
        },
        updateContent: (state, action) => {
            state.content = action.payload;
        },
        updateImage: (state, action) => {
            state.image = action.payload;
        },
        updateCategory: (state, action) => {
            state.category = action.payload;
        },
    }
})

export const { updateTitle, updateSlug, updateContent, updateImage, updateCategory } = blogFormSlice.actions;
export default blogFormSlice.reducer