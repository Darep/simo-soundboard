import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      { name: 'Mitäs perjantaina',  filename: 'mitas_perjantaina.mp4' },
      { name: 'Vammalasta kossun',  filename: 'vammalasta_kossun.mp4' },
      { name: 'Maisemakossua',      filename: 'maisemakossua_2.mp4'   },
      { name: 'Dadada dadda da',    filename: 'dadada_dadda_da.mp4'   },
      { name: 'Taskulämmin kossu',  filename: 'taskulammin_kossu.mp4' },
      { name: 'Hyvä darra',         filename: 'hyva_darra.mp4'        },
    ];
  }
});
