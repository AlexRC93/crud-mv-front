import { Observable } from 'rxjs'



export class ErrorHandler {
  static handleError(error: Response | any) {
    let errorMessage: string
      errorMessage = JSON.stringify(error.error)
      console.log(errorMessage)
    return Observable.throw(errorMessage)

  }
}
