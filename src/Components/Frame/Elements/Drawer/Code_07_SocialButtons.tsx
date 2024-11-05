import { Code_07_Button } from "./Reuse"

const Code_07_SocialButtons = () => {
    return (
        <>
            <h2 className="text-3xl font-bold mb-4">Social Buttons</h2>
            <p className="text-gray-600 mb-2">Choose your Badges:</p>
            <Code_07_Button platform="facebook" variant="filled" link="https://www.linkedin.com" text="Connect on LinkedIn" rounded="none" />
            <Code_07_Button platform="facebook" variant="filled" link="https://www.linkedin.com" text="Connect on LinkedIn" rounded="md" />
            <Code_07_Button platform="facebook" variant="filled" link="https://www.linkedin.com" text="Connect on LinkedIn" rounded="3xl" />

            <Code_07_Button platform="threads" variant="outlined" link="https://www.linkedin.com" text="Connect on LinkedIn" rounded="none" />
            <Code_07_Button platform="threads" variant="outlined" link="https://www.linkedin.com" text="Connect on LinkedIn" rounded="md" />
            <Code_07_Button platform="threads" variant="outlined" link="https://www.linkedin.com" text="Connect on LinkedIn" rounded="3xl" />


            <Code_07_Button platform="dribbble" variant="text" link="https://www.linkedin.com" text="Connect on LinkedIn" rounded="none" />
            <Code_07_Button platform="dribbble" variant="text" link="https://www.linkedin.com" text="Connect on LinkedIn" rounded="md" />
            <Code_07_Button platform="dribbble" variant="text" link="https://www.linkedin.com" text="Connect on LinkedIn" rounded="3xl" />

        </>
    )
}

export default Code_07_SocialButtons
