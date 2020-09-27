const createResource = (promise) => {
    // wraps a promise to use it for data-fetching with React.Suspense

    let status = "pending"; // should be an enum...
    let result;
    let suspender = promise
        .then(
            d => {
                console.log("Resource fetch successful");
                result = d;
                status = "success";
            },
            e => {
                console.log("Resource fetch unsuccessful");
                result = e;
                status = "error"
            }
        )

    return {
        read: () => {
            switch(status) {
                case "error":
                    throw result;
                case "success":
                    return result;
                case "pending":
                default:
                    throw suspender;
            }
        }
    }
}

export default createResource;