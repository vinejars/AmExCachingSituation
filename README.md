# Configuration

For Configuration, I noticed three main categories to alter/add: 
	1.  Dependencies
	2. Project Structure
	3. Testing Library & Script


# Dependencies

## ESLint
I immediately knew I wanted to use NextJS for this project, as it had a lot to do with caching and preloading data and server-side rendering is the most performant way to do that. Next has an ESLint integration out of the box, so it was my linter of choice.

## Prettier
I personally really believe in style guides as an engineer, and think a repo works best when everyone's coding with the same conventions, from naming to formatting. I also don't <i>love</i> having important meetings being taken up with the 5 millionth rendition of the tabs vs spaces debate. Having one singular meeting and then putting it in docs and Prettier to live for all eternity (or until someone has a strong opinion for changes) seems more efficient for everyone involved, and Prettier is my go-to. 

## NextJS
As I said before, I knew pretty immediately I wanted to add NextJS to this project when I saw the file with the caching util as it mentioned being server-side rendered and Next is the best SSR framework in my humble opinion. 



# Project Structure

I'm personally a big fan of atomic design, but seeing as this project was quite small I opted for going for a more traditional framework, breaking the app into components and utils.

# Testing Library & Script

If I had had the time, I would have utilized RTL and cypress-axe to cover testing for both functionality and accessibility.