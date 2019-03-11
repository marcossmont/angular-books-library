using System;
using System.Collections.Generic;
using System.Text;

namespace bookslibrary.api.application.Models
{
    public class ListModel<T>
    {
        public IEnumerable<T> Itens;
        public ListModel(IEnumerable<T> itens)
        {
            this.Itens = itens;
        }
    }
}
