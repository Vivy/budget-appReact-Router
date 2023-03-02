import { redirect } from 'react-router-dom'
import { toast } from 'react-toastify'
import { deleteItem } from '../helpers'

export const logoutAction = async () => {
  deleteItem({ key: 'userName' })
  deleteItem({ key: 'budgets' })
  deleteItem({ key: 'expenses' })
  toast.success('You have deleted your account!')
  return redirect('/')
}
