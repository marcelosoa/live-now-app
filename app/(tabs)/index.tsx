import { User, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { auth } from '../../config/firebase/firebaseConfig';

import Home from './home';
import Login from '../(stacks)/login';

export type accountModel = {
  email: string,
  password: string,
  id?: string,
  token?: string
}

export default function TabOneScreen() {
  const [loading, setLoading ] = useState<boolean>(false)
  const [account, setAccount] = useState<User | null>(null)

  useEffect(() => {
    setLoading(true)
    onAuthStateChanged(auth, (account) => {
      setAccount(account)
    })
    setLoading(false)
  }, [])

  return loading ? (
    <ActivityIndicator color={'#fff'} size={'small'}/>
  ) : !account ? (
    <Login />
  ) : <Home />
  
}

