
    export const getCurrency = async() => {
        try {
            const response = await fetch(" https://v6.exchangerate-api.com/v6/573b5231fcfeb2f9893916d9/latest/UAH")
            .then(res => res.json())
            // const data = response["conversion_rates"];
            const { USD, EUR } = response["conversion_rates"];

            return { USD, EUR };
        } catch (error) {
            console.log("There was an error", error);
        }
    }