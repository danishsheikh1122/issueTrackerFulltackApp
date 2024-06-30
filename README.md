## every functionalities used needs to be writen here

# Navbar

- Navbar implemented
- Navbar styling using classnames pkg (it makes conditional styling very easy)

# Setting up Database-mysql

- Seting up prisma,configuring .env database-url
- datagrid configured and db is working correctly connection tested-ok
- prisma client is working
- post request created app>api>issues>route.tsx,zod used,thnuderclient or postman

# Settings up Daisy ui

- daisy ui is working

# Creating ui of issue page

- issue page created with daisyui
- created new issue page and added markdown editor

# Handeled for submission

- data stored in db used simple fetch to hit post request and useRouter hook to redirect to previous page

# Displayed all issues from db to issue page

- const data = await prisma.issue.findMany(); just this much code to retrive data from database and do whatever you want to do with that data

# added skeleton

- added skeleton loading in loading.tsx and used npm pkg react-loading-skeleton to do so this pkg makes it very easy to implement skeleton loading in any app.

# created [id] to get id od the clicked issue

- added [id] folder and fetch unique data form DB using prisma
- added page.tsx in id and seperate loading for that page

# Created IssueBadge component to optimize our code and make it readable

- app/components/issuebadge is created and it takes props as string

# Styled ViewIssueDetailsPage page

- added style to this page

# Skeleton added to viewOIssueDetailsPage

- added delay to enhance ui/ux and used delay npm pkg
- loading.tsx added in [id]>loading.tsx and used react-skeleton pkg

# Bugfixed

- editor in issues/new page is ssr but requires client side events so we make it client component

# Refactoring imports

- refactoring and organising all imports in components folder

# Created many pathc api and created reusable component in _components folder (the \_component folder will not appera in routing coz it starts with _ it is good conventioncompanies uses) many updatrs hav been added and bugs fixes

- refer code fro Issueform inside \_components folder , api>issues>[id]>route.tsx
- kind of mess happened in code 😓

# Page is not refreshing

- fixed caching issue
- to referesh the page, so to do that we have several options but most commonly used client side method is call-> router.referesh() after router.push('/issue/edit') etc pages

# skeleton added for new and edit route

- reactsimpleMDE editor which is present in edit and new issues files is maked client side using this
  const IssueForm=dynamic(()=>import('@/app/issues/components/IssueForm'),{ssr:false ,loading:()=><Loadingcmp></Loadingcmp>})
- added seperate loading.tsx in new and edit issue folder and rendered using abovee loading:()=> loading.tsx->cmp

# Deleted above both loading files

- added one loading.tsx in \_components folder to make it reusable and reuse it in edit and new issues page.tsx

# one bug detected

- refresh the issue page and click on create new issue page and see skeleton loading of parent is showing first then html is rendered need to fix it

- same bug in edit issue age and new issue page not fixed till now

# above bug

- this is a bug presnet in current version of next js however we can slove thi by breaking the hierarchy of the routes but i am not fixing it coz it will make route ugly and refer 47.7

# Delete button added to edit issue page

- api created to delete issue form db (alway screate a api req wehenever you need to communicate with
  DB)

- DeleteIssuebutton added to issue>[id]>DeleteIssueButton.tsx containes all the code to delete issue also using fetch delete to delete the data from db
- imporving loading and added spinner in delete button

# implementing auth.js

- refer this docs https://next-auth.js.org/providers/google
- watch mosh from 48.1,49.2,50.3 to setup next-auth
- do as he does and ou will get results
- successfully implemented next-auth

# added login and logout buttons

- added these button in navbar cmp also used session refer 51.4
- styling these links
- seperated these links in different files and created LoginCard.tsx app>components/LoginCard.tsx
- created login links in NavBar.tsx

# added skeleton loading for logout and login button

-login links are apperarign after some time so we added skeleton loading to improve user experience

# bug fixes-related to next-auth

- most imp reviously we are using AUTH_SECRET but we are next-auth so use NEXTAUTH_SECRET NEXTAUTH_SECRET

- while using AUTH_SECRET as secret name ithis error is occuring [next-auth][warn][NO_SECRET] https://next-auth.js.org/warnings#no_secret
- NEXTAUTH_SECRET=Ah78Knw2bjrdOy2puqeLujL5YgKY2N37EDE/+gbrA+E= #no need to wrap it in string but it is fine
- always use NEXTAUTH if you are using next-auth -->NEXTAUTH_URL=http://localhost:3000 #no need to wrap it in string but it is fine

# Implementing middleware function

- create a new middleware.tsx at the root level
- Middleware functoin is a function that gets executed on each request , all the requests that we define in middleware.tsx file in his object
  export const config={
  matcher:[
  '/issues/new',
  '/issues/:id/edit'
  ]
  }

# Protecting edit and delete btns from anonymous users

- used getServerSession in C:\Users\HP\Desktop\nextjs-projects\issuetrackerapp\app\issues\[id]\page.tsx this file
- used session if true then display btns else not

# Protecting API routes

- in each api>auth>routes we define getServerSession( Provider object )
  Provider obj path-app/auth/ProviderObjext.ts
- in each POST DELETE request we define this
  and if(!session) then we sended nextresonse ad 401 unauthenticated

# assign to component added

- this cmp is used assign issue to users is present in issues/\_cmps folder
- assign cmp full working with fetch
- every time fetch is not good so we are using react quwery to do so
- created seperate branch for fetch

# So in order to solve above we are making this changes

- we have used tankstack.com React Query to fetch and cach data in efficient way now need to to fetch data every time we edit issue or etc
- created ReactQuery.tsx in app>ReactQuery.tsx and imported it in layout.tsx and wrap all body cmp to ReactQuer

- React Query worked dont check type at useQuery<User>
  instead check it later on.....

# Implementing assign to user in prisma

- created relation between user and issue schema 62.5
- Updated PATCH request in ap>api>issues>[id]>route.tsx, created new zod schema, 43.6
- tested api using postman and all done
- implemented assignee full function if one issue is assigned to a user and if we reload the page , the previously assigned user will show
- Refactored assigne cmp

# Added filterComponent in issue page

- added filterComponent of daisy ui to issue page
- filter component fully implemented with full functionalities
- from next/navigation I used router
- router.push,filter cpm file created and some updates IssuePagecmp

# bug fixes if user enters wrong query http://localhost:3000/issues?filterBy=OPENasd

- const status=Object.values(Status)
  console.log(status);
  const finalStatus=status.includes(filterBy)?filterBy:undefined;
  const data = await prisma.issue.findMany({ where: { status: finalStatus } });
- this code is used 68.2

# filtering data by issue and status

- Link href={/issues?filterBy=${filterBy}&orderBy=${value}}>
th
- ausing between issuepage file making filter query

- added filter issue with column name and by status (open close in progress)