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


Queries For Record And Members

SELECT members.id, members.firstname, members.middlename, members.lastname, 
records.att_id, records.member_id, records.id AS "record_id",
organizations.kapisanan
FROM members 

LEFT JOIN records ON members.id = records.member_id
LEFT JOIN organizations ON members.org_id = organizations.id







  {!record_data ? (
                                            <button
                                              className=" rounded-full flex justify-center items-center border-[2px] border-red-600 text-red-600 transition-all ease-in-out duration-500 hover:bg-red-600 hover:text-white
                                             monitor_md:h-[2rem]
                                             monitor_md:w-[2rem]
                                             "
                                              onClick={() => {
                                                setButton_Attend_Member({
                                                  ...button_attend_member,
                                                  // loading: true,
                                                  id: data.id,
                                                });

                                                axiosClient
                                                  .delete(
                                                    API_RECORD +
                                                      `/${button_attend_member.id}`
                                                  )
                                                  .then((res) => {
                                                    //   axiosClient
                                                    //     .get(API_MEMBER_RECORDS)
                                                    //     .then((res) => {
                                                    //       const total_members_count =
                                                    //         res.data.length;
                                                    //       const total_attendee =
                                                    //         res.data.filter(
                                                    //           (fil) =>
                                                    //             fil.att_id !==
                                                    //             null
                                                    //         ).length;
                                                    //       setMember_Data(
                                                    //         res.data
                                                    //       );
                                                    //       setRecord_Member_Data({
                                                    //         ...record_member_data,
                                                    //         member_count:
                                                    //           total_members_count,
                                                    //         member_attended:
                                                    //           total_attendee,
                                                    //       });
                                                    //     })
                                                    //     .catch((error) => {
                                                    //       console.log(error);
                                                    //     });
                                                    //   alert("Member Removed");
                                                    //   setButton_Attend_Member({
                                                    //     ...button_attend_member,
                                                    //     loading: false,
                                                    //     id: 0,
                                                    //   });
                                                  })
                                                  .catch((error) => {
                                                    console.log(error);
                                                  });
                                              }}
                                            >
                                              <FaUserMinus className="monitor_md:text-[1rem]" />
                                            </button>
                                          ) : (
                                            <button
                                              className=" rounded-full flex justify-center items-center border-[2px] border-green-600 text-green-600 transition-all ease-in-out duration-500 hover:bg-green-600 hover:text-white
                                        monitor_md:h-[2rem]
                                        monitor_md:w-[2rem]
                                        "
                                              onClick={() => {
                                                setButton_Attend_Member({
                                                  ...button_attend_member,
                                                  // loading: true,
                                                  id: data.id,
                                                });
                                                console.log(
                                                  button_attend_member.id
                                                );
                                                // axiosClient
                                                //   .post(API_RECORD, {
                                                //     att_id: attendance_id,
                                                //     member_id:
                                                //       button_attend_member.id,
                                                //   })
                                                //   .then((res) => {
                                                //     console.log(res.data);
                                                //   })
                                                //   .catch((error) => {
                                                //     console.log(error);
                                                //   });

                                                axiosClient
                                                  .post(API_RECORD, {
                                                    att_id: attendance_id,
                                                    member_id:
                                                      button_attend_member.id,
                                                  })
                                                  .then((res) => {
                                                    console.log(res.data);
                                                    setRecord_Data(res.data);
                                                    // const total_members_count =
                                                    //   res.data.length;
                                                    // const total_attendee =
                                                    //   res.data.filter(
                                                    //     (fil) =>
                                                    //       fil.att_id !== null
                                                    //   ).length;

                                                    // setMember_Data(res.data);

                                                    // axiosClient
                                                    //   .get(API_MEMBER_RECORDS)
                                                    //   .then((res) => {
                                                    //     const total_members_count =
                                                    //       res.data.length;
                                                    //     const total_attendee =
                                                    //       res.data.filter(
                                                    //         (fil) =>
                                                    //           fil.att_id !==
                                                    //           null
                                                    //       ).length;

                                                    //     setMember_Data(
                                                    //       res.data
                                                    //     );
                                                    //     setRecord_Member_Data({
                                                    //       ...record_member_data,
                                                    //       member_count:
                                                    //         total_members_count,
                                                    //       member_attended:
                                                    //         total_attendee,
                                                    //     });
                                                    //   })
                                                    //   .catch((error) => {
                                                    //     console.log(error);
                                                    //   });
                                                    alert("Attended");
                                                    setButton_Attend_Member({
                                                      ...button_attend_member,
                                                      loading: false,
                                                      id: 0,
                                                    });
                                                  })
                                                  .catch((error) => {
                                                    console.log(error);
                                                  });
                                              }}
                                            >
                                              <FaUserPlus className="monitor_md:text-[1rem]" />
                                            </button>
                                          )}



const uniqueMembers = data.filter((member, index, self) =>
  index === self.findIndex(m => m.member_Id === member.member_Id)
);

console.log(uniqueMembers);