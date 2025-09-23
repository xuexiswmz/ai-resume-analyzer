export const meta = () => {[
  {title:'Resume Analyzer | Auth'},
  {name:'description',content:'Log into your account'}
]}
const Auth = () => {
  return (
    <main className="bg-[url('/images/bg-auth.svg')] bg-cover min-h-screen flex items-center justify-center">
      <section className="flex flex-col gap-8 bg-white rounded-2xl p-10">
        <div className="flex flex-col items-center gap-2 text-center">
          <h1>Welcome</h1>
          <h2>Log In to Continue Your Job Journey</h2>
        </div>
      </section>
    </main>
  )
}

export default Auth