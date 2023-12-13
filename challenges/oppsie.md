# Oppsie

Documenting the small oppsies I made and the fixes to resolve.

## frontend

Grouping inputs:
Inputs and labels are linked by `id in input tag` and `for in label tag`.

<details>
<summary> html v react </summary>

```html
<input id="tab1" type="radio" name="tab" checked />
<label for="tab1" class="tab-label">Tab1</label>

<!-- react -->
<input id="tab1 type="radio" name="tab" checked />
<label hmtlFor="tab1" className="tab-label">Tab1</label>
```

</details>

<details>
<summary> react: reuseable component </summary>

useRef hook is used to create mutable object references that persist across renders. useRef is being used for both inputId and inputRef for different purposes.

1. inputId using useRef for the ID attribute:

   - inputId is being used to generate a unique ID for the input element. It is constructed using the useRef hook to ensure that the ID remains consistent across renders and ensures linking the label and corresponding input.

2. inputRef using useRef for referencing the DOM element:
   - inputRef is used to create a reference to the actual DOM node of the input element. This reference can be used to access and manipulate the DOM element: to focus, select, checked, etc.

```javascript
export const InputCheckbox: InputCheckboxComponent = ({ id ...Props}) => {
  const { current: inputId } = useRef(`InputCheckbox-${id}`)
  const inputRef = useRef(null)

  return (
    <div className="InputCheckbox--container" data-testid={inputId}>
        <input
            id={inputId}
            type="checkbox"
            className="InputCheckbox--input"
            ref={inputRef}
            onChange={onChange}
            checked={checked}
        />
        <label
            className={classNames("InputCheckbox--label", {
                "InputCheckbox--label-checked": checked,
                "InputCheckbox--label-disabled": disabled,
            })}
            htmlFor={inputId}
        />
    </div>
  )
  }
```

</details>

> To note:
>
> - A single useRef could be used to handle the id attribute generation and reference for DOM manipulation.
> - Single useRef is more concise and may be beneficial for when logic is not overly complex (i.e. no complex branching or conditionally rendering)
> - I choosed to use separate useRefs for clarity of each purpose, making the code more readable, and to set dynamic styling for the labels.

<details>
<summary> Grouping Inputs to only requiring a single selection </summary>

In the input tag ensure that the name attribute matches. This ensures the inputs are grouped together and will only allow 1 selection vs multi-select.

- In this example, I used group inputs to create tabs.

```html
<input id="tab1" type="radio" name="tab" checked />
<label for="tab1" class="tab-label">Tab1</label>
<input id="tab2" type="radio" name="tab" />
<label for="tab2" class="tab-label">Tab2</label>
```

</details>

## version control

Git is wonderful for tracking and logging our code changes. However, somewhere along the way there may be a case where you unintentionally tracked that should not have been tracked. In my case, I committed two oppsies.

### Accidentally initializing main desktop folder

I forgot to change directories before initializing and accidently added git to my main desktop directory. Resolve by:

```bash
cd Desktop #replace with whatever your folder is
rm -rf .git  #remove .git directory
ls -a #check to ensure git directory is removed
```

### Pushing .env to remote by forgetting to add to .gitignore

I forgot to add my .env file to gitignore. My .env file contain secrets and API key and I had already push my changes (along with other features) to remote.

1. Notify your team about the accidental exposure. There may be additional precautions needed.
2. Rotate your secrets
   - Assume your information is compromised and rotate your secrets immediately.
3. Update .gitignore to prevent future tracking of file
   - Add .env to .gitignore
4. Remove file from git locally:
   - git rm -r --cached .env
5. Commit and push change to remote
6. Remove a file from Git history (remote)
   - Use [git filter-repo](https://github.com/newren/git-filter-repo) to rewrite history to remove sensitive information.
