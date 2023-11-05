// utility than can be use on the entire app

export function removeHTMLTags(input: string) {

    // Remove HTML tags using regex
    return input.replace(/<[^>]+>/g, '');
}