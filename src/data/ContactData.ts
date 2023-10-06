import {faLinkedin, faSquareGithub, faSquareGitlab, faSquareXTwitter} from "@fortawesome/free-brands-svg-icons";
import {faSquareEnvelope, faSquarePhone} from "@fortawesome/free-solid-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faLinkedin, faSquareGithub, faSquareGitlab, faSquareXTwitter, faSquareEnvelope, faSquarePhone);



export const ContactData = [
    {
        ContactIcon: "fa-brands fa-square-github",
        ContactLink: "/",
        ContactText: "github.com/john-doe"
    },
    {
        ContactIcon: "fa-brands fa-square-gitlab",
        ContactLink: "/",
        ContactText: "gitlab.com/john-doe"
    },
    {
        ContactIcon: "fa-brands fa-linkedin",
        ContactLink: "/",
        ContactText: "linkedin.com/in/john-doe"
        // ContactText: "john-doe-123456789"
    },
    {
        ContactIcon: "fa-brands fa-square-x-twitter",
        ContactLink: "/",
        ContactText: "x.com/john-doe"
    },
    {
        ContactIcon: "fa-solid fa-square-envelope",
        ContactLink: "/",
        ContactText: "johndoe@email.com"
    },
    {
        ContactIcon: "fa-solid fa-square-phone",
        ContactLink: "/",
        ContactText: "+91 9876543210"
    },
]