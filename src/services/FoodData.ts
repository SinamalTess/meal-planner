export class FoodData {
    url: URL

    constructor(language: string) {
        this.url = new URL(
            `https://${language}.openfoodfacts.org/cgi/search.pl`
        )
    }

    fetchProducts = (value: string, callback: Function) => {
        const params = {
            json: 'true',
            action: 'process',
            tagtype_0: 'categories',
            tag_contains_0: 'contains',
            tag_0: value,
        }

        this.url.search = new URLSearchParams(params).toString()

        fetch(this.url)
            .then((response) => response.json())
            .then((data: any) => {
                //console.log(data)
                callback(data.products)
            })
            .catch((error) => {
                console.log(error)
            })
    }
}
