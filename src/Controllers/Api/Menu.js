const MenuModel = require('../../Database/Models/MenuModel')

module.exports = {
  async index(req, res) {
    try {
      const data = await MenuModel.findAll()
      const menus = [];

      data.forEach(element => {

        let object = {
          'descricao': element.description,
          'menu_referencia': element.refmenu,
          'ordem': element.order,
          //'assistencial': element.is_assistance,
          'tipo': element.type,
          'servico_acomp_pac': element.type_service,
          'grupo': element.grupo,
          'atividade': element.atividade,
          'aceitar': element.aceitar,
          'equipe': element.equipe,
          'tempo_atendimento': element.tempo_atendimento,
          'controla_quantidade': element.is_quantity,
          'min_quantidade': element.min_quantity,
          'max_quantidade': element.max_quantity,
        }

        menus.push(object)
      });

      return res.status(200).json({ menus });

    } catch (error) {
      return res.status(500).json({ error });
    }

  },
};



