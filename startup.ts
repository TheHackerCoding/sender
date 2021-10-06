import * as Linking from 'expo-linking';
import { URLSchemeEnum } from './types.d';
import { ErrorPage } from './utils';


export default async function () {
  let url = await Linking.getInitialURL()
  let _url
  if (url === null) {
    return null
  } else {
    _url = Linking.parse(url)
    if (!Object.values(URLSchemeEnum).includes(_url.path as URLSchemeEnum)) {
      return ErrorPage(`No such data type as ${_url.path}`)
    }
  }
}