export default {
    name: 'postedBy',
    title: 'Posted By',
    type: 'reference', // connect to the different documents: reference to ->
    // -> được hiểu là postedBy tham chiếu đến schema (nôm na giống bảng) user.js và match với field có name = 'postedBy' trong comment.js
    // -> ví dụ: postedBy tham chiếu tới user.js và match với user post comment, và lấy được toàn bộ dữ liệu của user đó, sau đó trường postedBy này cũng tồn tại trong comment.js nên với mỗi comment được sinh ra, đều có thể biết được user comment là ai thông qua trường postedBy (bắc cầu)
    to: [{ type: 'user' }]
}