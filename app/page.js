import Link from 'next/link'

const Index = () => (
  <div>
    <Link href="/about">
      <button>Click Me</button>
    </Link>
    <Link href="/about">
      Abc
    </Link>
    <p>Hello Next.js</p>
  </div>
)

export default Index

// const A = props => (<div onClick={e => {
//   props.onClick(e)
// }}>Click Me</div>)
