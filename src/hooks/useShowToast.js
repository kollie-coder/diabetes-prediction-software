import { useToast } from '@chakra-ui/react'
import React, { useCallback } from 'react'

const useShowToast = () => {

    const toast = useToast()
    
    // useCallback is used to prevent infinite loop by catching the function
    const showToast = useCallback((title, description, status) => {
      toast({
         title: title,
         description: description,
         status: status,
         duration: 20000,
         isClosable: true,
      })
 }, [toast])
  return showToast

}

export default useShowToast