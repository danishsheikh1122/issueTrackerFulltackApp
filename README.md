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
- added one loading.tsx in _components folder to make it reusable and reuse it in edit and new issues page.tsx

# one bug detected 
- refresh the issue page and click on create new issue page and see skeleton loading of parent is showing first then html is rendered need to fix it  

- same bug in edit issue age and new issue page not fixed till now