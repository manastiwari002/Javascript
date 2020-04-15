class Github{
    constructor(){
        this.client_id = '69359f8ae2dee0586bd3'
        this.client_secret = '36b6e3eccd5475a4818b2a6f6fa8d9bfee6907a5'
        this.repos_count = 5
        this.repos_sort = 'created: asc'
    }
    async getUser(user){
        //Get Profile
        const resProfile = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
        //Get Repos
        const resRepos = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`)

        const profile = await resProfile.json()

        const repos = await resRepos.json()

        return {
            profile,
            repos
        }
    }
}