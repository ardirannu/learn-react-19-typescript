type Props = {
    children: React.ReactNode //tentukan type react node
}

const ChildrenProps = ({children}: Props) => {
  return (
    //mengirim component lewat props
    <div>{children}</div>
  )
}

export default ChildrenProps