export const copyClipboard = (emailContainerElement: HTMLElement) => {
    const el = document.createElement("input") as HTMLInputElement;
    const email = emailContainerElement.querySelector("p") as HTMLElement;

    document.body.append(el);

    const oldValue = email.innerText

    el.value = email.innerText;
    el.select();
    document.execCommand("copy");
    el.remove();
    email.innerText = "copied ✔"

    setTimeout(() => {
        email.innerText = oldValue
    }, 2000);

}