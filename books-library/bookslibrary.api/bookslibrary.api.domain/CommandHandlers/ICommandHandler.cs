namespace bookslibrary.api.domain.CommandHandlers
{
    public interface ICommandHandler<T1, T2>
    {
        T2 Execute(T1 command);
    }
}