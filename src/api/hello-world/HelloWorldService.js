import axios from "axios"

class HelloWorldService{

    executeHelloWorldService(name){
        console.log('executed service call')
        return axios.get(`http://localhost:9080/demo/hello-world/${name}`)
    }

}

export default new HelloWorldService()


