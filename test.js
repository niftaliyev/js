export  async function getResponse() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let content = await response.json();
    

    // for (let key in content) {

    //     let item = document.createElement('li');
    //     item.innerHTML += content[key].id + '\n';
    //     list.append(item);

    //     // console.log(content[key]);
    // }
    for (const iterator of content) {
        console.log(iterator);

        let item = document.createElement('li');
        item.innerHTML += iterator.id + '\n';
        list.append(item);
    }
}

export async function getOne(){
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    let content = await response.json();
    console.log(content);
    let item = document.createElement('li');
    item.innerHTML += '<i>❌</i> ' + content.title;
    list.append(item);
}