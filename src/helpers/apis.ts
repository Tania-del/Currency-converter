
    export const getCurrency = async(currency: string) => {
        try {
            const response = await fetch(`https://v6.exchangerate-api.com/v6/ffd1c37b6a5766a94da09ec1/latest/${currency}`)
            .then(res => res.json())
            const { USD, EUR, UAH } = response["conversion_rates"];

            return { USD, EUR, UAH };
        } catch (error) {
            console.log("There was an error", error);
        }
    }