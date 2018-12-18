import delay from './delay';

const blogs  = [
  {
    id: 1,
    postby: "Nadim",
    postdate: "27 Feb 2016",
    posttitle:"Web Development using AngularJS",
    postcontent: "this is the test content this is the test content this is the test content the test contentthe test test content the test contentthe test",
    imgurl:"../../images/2.png"
  },
  {
    id: 2,
    postby: "Admin",
    postdate: "27 Feb 2016",
    posttitle:"Web Development using AngularJS",
    postcontent: "this is the test content this is the test content this is the test content the test contentthe test test content the test contentthe test",
    imgurl:"../../images/2.png"
  },
  {
     id: 3,
    postby: "Admin",
    postdate: "27 Feb 2016",
    posttitle:"Web Development using AngularJS",
    postcontent: "this is the test content this is the test content this is the test content the test contentthe test test content the test contentthe test",
    imgurl:"../../images/2.png"
  },
  {
    id: 4,
    postby: "Nadim",
    postdate: "27 Feb 2016",
    posttitle:"Web Development using AngularJS",
    postcontent: "this is the test content this is the test content this is the test content the test contentthe test test content the test contentthe test",
    imgurl:"../../images/2.png"
  }
];


class BlogApi {
  static getAllBlogs() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], blogs));
      }, delay);
    });
  }}

  export default BlogApi;