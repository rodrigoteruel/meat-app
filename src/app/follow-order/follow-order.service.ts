import {Injectable} from '@angular/core'
import {Http} from '@angular/http'

import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import {MenuItem} from '../restaurant-detail/menu-item/menu-item.model'

import {MEAT_API} from '../app.api'
import {ErrorHandler} from '../app.error-handler'

@Injectable()
export class FollowOrderService {

    constructor(private http: Http){}

    followOrderById(id: string): Observable<any>{
      return this.http.get(`${MEAT_API}/orders/${id}`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }
}
