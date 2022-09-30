export class FoodData {
    url: URL
    prefix: string

    constructor() {
        this.prefix = 'us.'
        this.url = new URL(
            `https://${this.prefix}openfoodfacts.org/cgi/search.pl`
        )
    }

    fetchIngredient = (value: string, callback: Function) => {
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
            .then((data) => {
                console.log(data)
                const name = data.products[0].product_name_en
                callback(name)
            })
            .catch((error) => {
                console.log(error)
            })
    }
}
