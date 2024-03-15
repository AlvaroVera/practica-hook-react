import React from 'react'

const useFetch = (url) => {


    const [state, setState] = useState({
        data: null,
        isLoading: true,
        errors: null
    })

    const getFetch = async() => {


        if (!url) return


try {
    
} catch (error) {
    
}

        const response = await fetch(url)
        const data = await response.json()

        setState({
            data,
            isLoading: false,

        })
    }


  return {
    data,
    isLoading,
    errors
  }
}

export default useFetch
