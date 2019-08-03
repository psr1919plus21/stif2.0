import postStub from './post-stub';

const feedStub = [];
const stubsCount = 10;

for (let i = 0; i < stubsCount; i++) {
    const postStubWithRandomUrl = {...postStub, url: 'http://' + Math.random()};
    feedStub.push(postStubWithRandomUrl);
}

export default feedStub;
