const HeaderNavBar = ({ setStep, step }) => {
    return (
        <nav class="w-full glass-bg shadow fixed z-50">
            <div class="container flex items-center justify-center p-6 mx-auto text-blue-500 capitalize">
                {[{ title: 'Login' }, { title: 'Register' }].map((item, index) => (
                    <a key={index} onClick={() => setStep(item.title)} class={`border-b-2 ${item.title === step ? 'border-blue-500' : 'border-transparent text-gray-400'} hover:text-blue-500 hover:border-blue-500 mx-1.5 sm:mx-6 cursor-pointer font-black text-xl`}>{item.title}</a>
                ))}
            </div>
        </nav>
    )
}

export default HeaderNavBar