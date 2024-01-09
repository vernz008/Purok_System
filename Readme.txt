ERD Naming Conventions

note: Pls paki palitan ung 3 tables at sanayin mo maglagay ng underscore noh.

note: Paki hiwalay ung group sa table ng Purok, gawin natin independent si gorup
chineck ko ung excel ung mismong list, suggest ko lang gawin natin sialng independednt 
parang category type ung dating.

note: Pa QA ng gawa ko boss Verns.


Tables = {
    
Purok:[
Purok -> District
purokid -> district_id
]

Organization:[
orgid -> org_id
]

Member:[
memberid -> member_id
]

}

January 8 Updates = {
    Login system Done *
    Backend AuthenticationController is now functional,
    middleware is now in use in the API.

    note: Need to create a user in database,
    registration is still WIP. Token is now required, loggin in.
    Logout function is still work in progress.
}
