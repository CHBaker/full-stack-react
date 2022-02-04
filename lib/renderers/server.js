import React from 'react'
import ReactDOMServer from 'react-dom/server'
import axios from 'axios'
import App from 'components/App'
import DataApi from 'state-api'
import config from 'config'

const serverRender = async () => {
    const response = await axios.get(`http://${config.host}:${config.port}/data`)
    const store = new DataApi(response.data)



    return {
        initialMarkup: ReactDOMServer.renderToString(
            <App initialData={store} />
        ),
        initialData: resp.data
    }
}

export default serverRender;
