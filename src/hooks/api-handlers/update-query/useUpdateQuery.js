 
import { useQueryClient } from 'react-query'

const useUpdateQuery = () => {
 const queryClient = useQueryClient()
 
 const update=(KEY)=>{
    queryClient.invalidateQueries(KEY)
 }
   
 return {
    update
 }
}

export default useUpdateQuery