import CategoryController from './src/controllers/category-controller.js';
import PopularController from './src/controllers/popular-controller.js';
import RecentController from './src/controllers/recent-controller.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log('init !!');
    CategoryController.init();
    PopularController.init();
    RecentController.init();
});