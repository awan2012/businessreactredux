import delay from './delay';

const services = [
  {
    id: 1,
    name: "Web Development",
    description: "this is the test content this is the test content this is the test content the test contentthe test test content the test contentthe test",
    imgurl:"../../images/csharp.png"
  },
  {
    id: 2,
    name: "iOS Development",
    description: "this is the test content this is the test content this is the test content the test contentthe test test content the test contentthe test",
    imgurl:"../../images/csharp.png"
  },
  {
     id: 3,
     name: "Android Development",
    description: "this is the test content this is the test content this is the test content the test contentthe test test content the test contentthe test",
    imgurl:"../../images/csharp.png"
  },
  {
    id: 4,
    name: "App Development",
    description: "this is the test content this is the test content this is the test content the test contentthe test test content the test contentthe test",
    imgurl:"../../images/csharp.png"
  }
];


class ServiceApi {
  static getAllServices() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], services));
      }, delay);
    });
  }}

  export default ServiceApi;