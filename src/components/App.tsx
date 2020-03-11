import React from 'react';

import { Button } from 'antd';

interface AppProps {
  name: string;
}

export default function App({ name }: AppProps) {
  return <Button>{name}</Button>;
}