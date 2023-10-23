export default () => {
    const { logout } = useStrapiAuth();
    const router = useRouter();
    return () => {
        try {
            logout();
            localStorage.removeItem('talkual_token')
            router.push('/')
        } catch (e) {
            console.error(e)
        }
    }
}