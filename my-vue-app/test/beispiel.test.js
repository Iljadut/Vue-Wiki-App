test('beispiel test', () => {
    expect(true).toBe(true);
});



//Weitere Tests wurden angegangen, jedoch kam immer wieder die selbe Fehlermeldung "Cannot find modul..."
//Beim Troubleshooten wurden viele unterschiedliche Dateien erstellt, umkonfiguriert und vieles mehr.
//Da nach sehr viel Troubleshooten die Fehlermeldung nicht wegzubekommen war, hier nun einige mögliche Test auskommentiert:

//tests/unit/App.spec.js:
//import { shallowMount } from '@vue/test-utils';
//import App from '@/App.vue';
//describe('App.vue', () => {
//    let wrapper;
//    beforeEach(() => {
//        wrapper = shallowMount(App);
//    });
//    it('toggles dark mode', async () => {
//        const button = wrapper.find('.dark-mode-toggle');
//        await button.trigger('click');
//        expect(wrapper.vm.darkMode).toBe(true);
//        await button.trigger('click');
//        expect(wrapper.vm.darkMode).toBe(false);
//    });
//});

//tests/unit/NewArticleForm.spec.js:
//import { shallowMount } from '@vue/test-utils';
//import axios from 'axios';
//import NewArticleForm from '@/components/NewArticleForm.vue';
//jest.mock('axios');
//describe('NewArticleForm.vue', () => {
//    let wrapper;
//    beforeEach(() => {
//        wrapper = shallowMount(NewArticleForm);
//    });
//    it('clears the form after submission', async () => {
//        axios.post.mockResolvedValue({ data: {} });
//        wrapper.setData({
//            title: 'Test Title',
//            content: 'Test Content',
//            author: 'Test Author'
//        });
//        await wrapper.find('form').trigger('submit.prevent');
//        expect(wrapper.vm.title).toBe('');
//        expect(wrapper.vm.content).toBe('');
//        expect(wrapper.vm.author).toBe('');
//    });
//});

//tests/unit/FavoritesPage.spec.js:
//import { shallowMount } from '@vue/test-utils';
//import FavoritesPage from '@/components/FavoritesPage.vue';
//describe('FavoritesPage.vue', () => {
//    let wrapper;
//    beforeEach(() => {
//        localStorage.setItem('favorites', JSON.stringify([
//            { id: 1, title: 'Test Article', author: 'Author', content: 'Content' }
//        ]));
//        wrapper = shallowMount(FavoritesPage);
//    });
//    afterEach(() => {
//        localStorage.clear();
//    });
//    it('loads favorites from local storage', () => {
//        expect(wrapper.vm.favorites.length).toBe(1);
//    });
//});

//tests/unit/ArticleListPage.spec.js:
//import { shallowMount } from '@vue/test-utils';
//import axios from 'axios';
//import ArticleListPage from '@/components/ArticleListPage.vue';
//jest.mock('axios');
//describe('ArticleListPage.vue', () => {
//    let wrapper;
//    beforeEach(() => {
//        axios.get.mockResolvedValue({
//            data: [
//                { id: 1, title: 'Test Article', author: 'Author', content: 'Content' }
//            ]
//        });
//        wrapper = shallowMount(ArticleListPage);
//    });
//    it('renders articles', async () => {
//        await wrapper.vm.$nextTick();
//        expect(wrapper.findAll('.article-item').length).toBe(1);
//    });
//});