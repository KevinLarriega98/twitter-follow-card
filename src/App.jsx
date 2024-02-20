import './App.css'
import TwitterFollowCard from './TwitterFollowCard'

const users = [
    {
        userName: 'kevinxp15',
        name: 'Kevinxp15',
        isFollowing: true
    },
    {
        userName: 'netflix',
        name: 'Netflix',
        isFollowing: false
    },
    {
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        isFollowing: true
    },
    {
        userName: 'reactjs',
        name: 'React',
        isFollowing: false
    },
]

const App = () => {
    return (
        <section className="App">
            {
                users.map(({ userName, name, isFollowing }) => (
                    <TwitterFollowCard 
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                ))
            }
        </section>
    )
}

export default App