import { HttpRequest, httpResponse } from '../protocols/http'

export class SignUpController {
  handle (httpRequest: HttpRequest): httpResponse {
    return {
      statusCode: 400,
      body: new Error('Missing param: name')
    }
  }
}
