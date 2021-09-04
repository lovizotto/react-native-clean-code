import {Beer} from "../../domain/models/Beer";
import {AxiosImpl} from "../../infra/http/impl/AxiosImpl";
import {FetchBeers} from "../../domain/usecases/FetchBeers";

export class RemoteFetchBeers implements FetchBeers {
    constructor(
        private readonly url: string,
        private readonly fetchBeerHttp: AxiosImpl
    ) {
    }

    async fetch(params?: FetchBeers.Params): Promise<Array<Beer>> {
        const response = await this.fetchBeerHttp.get({
            url: this.url,
            headers: {
                "Content-Type": "text/json"
            }
        })

        return response.data
    }

}