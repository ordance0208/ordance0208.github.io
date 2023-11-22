import Typograpghy from '../Typography';

interface Props {
  name: string;
  Icon: any;
}

const Skill = ({ name, Icon }: Props) => {
  return (
    <div className='rounded-full flex items-center justify-center flex-col gap-1 h-[100px] w-[100px] hover:cursor-pointer hover:scale-105 transition-transform relative z-2'>
      {<Icon size={48} />}
      <Typograpghy className='text-center'>{name}</Typograpghy>
    </div>
  );
};

export default Skill;
